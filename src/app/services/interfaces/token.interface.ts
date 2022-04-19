export interface OpaqueToken {
    stokenValidatorResponse: StokenValidatorResponse;
}

export interface StokenValidatorResponse {
    mensaje:       string;
    codigoMensaje: string;
    idusuario:     string;
    pAdicional:    string;
}
