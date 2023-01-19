import React, { useEffect, useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { dracula } from '@uiw/codemirror-theme-dracula';
import { validator } from '@schemas/validator';
import { editor } from '@schemas/editor.schema';
import { Exchange } from '@services/rabbitmq/interfaces/exchange.interface';
import { Producer } from '@services/rabbitmq/interfaces/producer.interface';
import { QueueBindingConsumerRegister } from '@services/rabbitmq/interfaces/queue.interface';

interface SetComponents {
  setQueuesEditor: React.Dispatch<React.SetStateAction<QueueBindingConsumerRegister[]>>
  setExchangesEditor: React.Dispatch<React.SetStateAction<Exchange[]>>;
  setProducersEditor: React.Dispatch<React.SetStateAction<Producer[]>>;
}

interface JsonCode {
  queues: QueueBindingConsumerRegister[];
  exchanges: Exchange[];
  producers: Producer[];
}

interface Props {
  jsonCode: JsonCode
  setComponents: SetComponents;
}
function isJsonString(str: string) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
export default function CodeEditor(props: Props): JSX.Element {
  const [jsonTextArea, setJsonTextArea] = useState(`{ "json": "example" }`)

  useEffect(() => {
    setJsonTextArea(JSON.stringify(props.jsonCode, null, 2))
  }, [])

  useEffect(() => {
    setJsonTextArea(JSON.stringify(props.jsonCode, null, 2))
  }, [props.jsonCode])

  const onChangeCodeEditor = React.useCallback((value, viewUpdate) => {
    if (isJsonString(value)) {
      setJsonTextArea(value)
    }
  }, [jsonTextArea]);

  function editorOnBlur() {
    const objectValue = JSON.parse(jsonTextArea) as JsonCode
    const isVerify = validator.validate(objectValue, editor)
    const bindingVerify = objectValue.queues.every(queue => queue.bindings.every(binding => {
      return objectValue.exchanges.some(exchange => exchange.name === binding.source)
    }))
    if (isVerify.errors.length > 0) {
      console.log("existem erros no json")
    } else if (!bindingVerify) {
      console.log("existe exchanges inexistente vinculados a fila")
    } else {
      props.setComponents.setQueuesEditor(objectValue.queues);
      props.setComponents.setExchangesEditor(objectValue.exchanges);
      props.setComponents.setProducersEditor(objectValue.producers);
    }
  }

  return (
    <CodeMirror
      data-testid="code-editor"
      value={jsonTextArea}
      height="100%"
      extensions={[json()]}
      theme={dracula}
      onChange={onChangeCodeEditor}
      indentWithTab={true}
      onBlur={editorOnBlur}
    />
  );
}