const sb=supabase.createClient(KF_CONFIG.SUPABASE_URL,KF_CONFIG.SUPABASE_PUBLISHABLE_KEY);
const room=()=>localStorage.getItem("kf_room")||"";
async function rpc(n,p){let r=await sb.rpc(n,p);if(r.error)throw r.error;return r.data}
const getState=()=>rpc("kf_get_state",{p_room_code:room()});
const setState=c=>rpc("kf_set_state",{p_room_code:room(),p_config:c});
const addEvent=(k,v,w="")=>rpc("kf_add_event",{p_room_code:room(),p_killer:k,p_victim:v,p_weapon:w});
const getEvents=()=>rpc("kf_events",{p_room_code:room()});
