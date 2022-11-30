import React, { useContext } from "react";

import { AuthContext, AuthContextDataProps } from '../Contexts/AuthContext';

export function useAuth(): AuthContextDataProps{
    const context=  useContext(AuthContext);
    return context ;
    
}
