import { Validator } from 'jsonschema'
import { editor } from './editor.schema';
import { binding, consumer_register, queue } from './queue.schema';
import { exchange } from './exchange.schema';
import { producer } from './producer.schema';

const validator = new Validator();

validator.addSchema(binding);
validator.addSchema(consumer_register);
validator.addSchema(queue);

validator.addSchema(exchange);

validator.addSchema(producer);

validator.addSchema(editor);


export { validator }