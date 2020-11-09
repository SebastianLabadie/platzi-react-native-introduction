
class Http {
    static instance = new Http()

    get= async (url) =>{
        try {
            let res= await fetch(url)
            let json = await res.json()
            return json
        } catch (error)  {
                console.log('http error: ',error)

                throw Error(error)
        }
    }
}

export default Http