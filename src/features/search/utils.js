export const stringFormat = (url,...args) => {
    
    for (let i =0;i<args.length;i++) {
      url = url.replace("{" + i + "}", args[i])
    }
    return url;
}