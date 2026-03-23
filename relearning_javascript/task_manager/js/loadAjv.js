import { Ajv2020 } from "https://esm.sh/ajv@8/dist/2020";
import addFormats  from "https://esm.sh/ajv-formats@2"; 

const ajv = new Ajv2020({allErrors:true, strict:false});
addFormats(ajv);
window.ajv = ajv;