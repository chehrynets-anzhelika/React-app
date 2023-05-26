import {useState, useEffect} from "react";

export function useLocalStorageList(key) {
    const [ state, setState ] = useState( () => JSON.parse(localStorage.getItem(key)) || false)
                    useEffect(()=> {
                        localStorage.setItem(key, JSON.stringify(state))
                    },[state, key])
                    return [ state, setState ]
                }


