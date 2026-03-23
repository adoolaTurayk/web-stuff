export async function schemaFetch(){
    try{
        let response = await fetch("../taskschema.json");

        if (!response.ok) throw new Error("taskschema.json not found")

        let data = await response.json();
        let validate = window.ajv.compile(data);
        return validate;
    }
    catch (error){
        console.error(error);
    }
}