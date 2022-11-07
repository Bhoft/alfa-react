import { useEffect, useState } from "react"



const getNewMessage = (): string => (
    (Math.random()+1).toString(36).substring(7)
)




const getNewMessageAsync = (timeout:number = 1000):Promise<string> => new Promise((resolve, reject) => {
    setTimeout(()=>{
        // resolve in 2 seconds
        resolve(getNewMessage())
      }, timeout)

    // sowas geht nicht
    // resolve(setTimeout(()=> { getNewMessage(), 2000}))

  })


export const PromisePlayground = () => {
    
    const [messageList, setMessageList ] =  useState<string[]>([])

    useEffect(() => {

        console.log('useEffect')

        // snychrone aufruf
        // setMessageList([getNewMessage()])
        setMessageList((oldList)=> [...oldList, 'snyc: '+ getNewMessage()])

        // console.log(['messageList 1 ', messageList])

        // async aufruf
        // getNewMessageAsync().then((newMessage) => setMessageList([newMessage]))
        getNewMessageAsync().then((newMessage) => setMessageList((oldList) => [...oldList, 'async 1: ' + newMessage]))

        // console.log(['messageList 2 ', messageList])
        // geht nicht
        // const newMessage = getNewMessageAsync()

        // geht newMessagePromise ist ein Promise auf einen string
        // bei then gibt es dann den rückgabewert aus der promise resovle
        const newMessagePromise = getNewMessageAsync(2000)
        newMessagePromise.then((newMessage2) => setMessageList((oldList) => [...oldList, 'async 2: ' + newMessage2]))
        
        // console.log(['messageList 3 ', messageList])
        // aufruf einer asnc funktion
        // fillListWithnewMessage()
        fillListWithnewMessage().then(()=> console.log('async function call finished'))

        // messageList ist immer null nach dem setzen
        // console.log(['messageList 4', messageList])
        // ich habe nachgefragt man kann kein then auf ein setMessageList oder so machen
        // d.h. ich kann nicht darauf warten, dass der useState gefüllt ist.
        
    
    }, [])

    const fillListWithnewMessage = async() => {
       const newMessage =  await getNewMessageAsync(3000)
       setMessageList((oldList) => [...oldList, 'async aus function: ' + newMessage])
    }

    return (<ul>
        {messageList.map((message, index) => (
            <li key={index}>{message}</li>
        ))}   
    </ul>)
}