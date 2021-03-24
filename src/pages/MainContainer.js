import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Table from '../components/Table'
import SearchForm from '../components/SearchForm'

function MainContainer(){
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getRandomUsers()
    }, [])

    async function getRandomUsers(){
        const result = await axios.get('https://randomuser.me/api/?results=25&seed=seed')
        setUsers(result.data.results)
    }

    function getSearchResults(){
        console.log('Searching for:', search)
        const searchedUser = users.filter(user => search.toLowerCase().indexOf(user.name.first.toLowerCase())> -1 || search.toLowerCase().indexOf(user.name.last.toLowerCase())> -1)
        console.log(searchedUser)
        setUsers(searchedUser)
    }


    function handleInputChange(event){
       setSearch(event.target.value)
        console.log(event.target.value)
    }

    function handleFormSubmit(event){
        event.preventDefault()
        getSearchResults()
        if (search ===""){
            getRandomUsers()
        }
    }

    function sortEmail(){
        const sorted = users.sort( function(item1, item2){
            if(item1.email < item2.email){
                return -1
            }
            if (item1.email > item2.email){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    function sortNumber(){
        const sorted = users.sort( function(item1, item2){
            if(item1.phone < item2.phone){
                return -1
            }
            if (item1.phone > item2.phone){
                return 1
            }
            return 0
        })
        setUsers([...sorted])
    }
    function sortName(){
        const sorted = users.sort( function(item1, item2){
            if(item1.name.first < item2.name.first){
                return -1
            }
            if (item1.name.first > item2.name.first){
                return 1
            }
            return 0
        })
        setUsers([...sorted])
    }

 
    return(
            <div className="container">
            <SearchForm value={search} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit}/>
            <Table list={users} sortEmail={sortEmail} sortNumber={sortNumber} sortName={sortName}/>
        </div>
    )
}

export default MainContainer

