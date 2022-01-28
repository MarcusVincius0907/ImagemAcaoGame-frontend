const STORAGE_TYPES = {
  CONFIG : 'CONFIG'
}

const saveConfig = (config) => {
  try{
    localStorage[STORAGE_TYPES.CONFIG] = JSON.stringify(config);
  }catch(e){
    console.log(e);
  }
}

const getConfig = () => {
  try{
    return JSON.parse(localStorage[STORAGE_TYPES.CONFIG]??"");
  }catch(e){
    console.log(e);
  }
}

export default Storage = {
  saveConfig,
  getConfig
}