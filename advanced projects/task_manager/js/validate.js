import { schemaFetch } from "./schemaFetch.js";

let validateFn = null;

export async function checkObjValidity(data){
    if (!validateFn) validateFn = await schemaFetch();

    const valid = validateFn(data);
    const errorMessage = valid ? [] : (validateFn.errors || []);

    return { valid, errorMessage };
}