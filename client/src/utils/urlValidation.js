
const isValidURL = ( url ) => {
const urlPattern = /^(https?:\/\/)?(www\.)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
return urlPattern.test(url);
}

export default isValidURL