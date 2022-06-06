export const getPropsByPath = (obj: Record<string, any>, path: string) => {
    let templateObj = obj
    let keyArr = path.split('.')
    let i = 0

    for (let len = keyArr.length; i < len - 1; i++) {
        let key = keyArr[i]
        if (key in templateObj) {
            templateObj = templateObj[key]
        } else {
            return {}
        }
    }

    return {
        o: templateObj,
        k: keyArr[i],
        v: templateObj[keyArr[i]]
    }
}


export const setPropsByPath = (obj: Record<string, any>, path: string, initialData = {} ,callback: (data: any) => void) => {
    let templateObj = obj
    let keyArr = path.split('.')
    let i = 0


    for (let len = keyArr.length; i < len - 1; i++) {
        let key = keyArr[i]
        const hasCurrentProps = key in templateObj;
        if (!hasCurrentProps) {
            // const currentToken = parseInt(key)
            // if (`${currentToken}` == key) {
            //    // TODO
            // }
            if (i == len - 1) {
                templateObj[key] = initialData
                callback(templateObj[key])
            } else {
                templateObj[key] = {}
            }  
        }
        templateObj = templateObj[key]
    }
}