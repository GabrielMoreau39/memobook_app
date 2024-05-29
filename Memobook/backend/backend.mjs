import PocketBase from 'pocketbase';

var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
 pocketbase_ip = "https://optimood.gabriel-moreau.fr:443";
else pocketbase_ip = "http://localhost:8090";
const pb=new PocketBase(pocketbase_ip); 