import React, { useContext } from 'react'
import { VerifyDiffContentParams, verifyDiffContent } from './utils/verifyDiffContent';


type SchemaStateProps = {
  children: React.ReactNode;
};

interface UseSchema {
  verifyDiffContent({ components, componentsEditor, type }: VerifyDiffContentParams): boolean
}

export const SchemaContext = React.createContext<UseSchema>({} as UseSchema);

export function SchemaState({ children }: SchemaStateProps) {
  return (
    <SchemaContext.Provider value={{
      verifyDiffContent
    }}>{children}</SchemaContext.Provider>
  )
}

export function useSchema(): UseSchema {
  return useContext(SchemaContext);
}
