
import React,{Component} from 'react'



class UserProfile extends Component {
render(){
  
  let userProfileData = this.props.profiles
  let usersIfors = this.props.users 
  let newMovies = this.props.movies
   return(
         <div>
           { userProfileData.map(item => { 
                    const favMovie = newMovies[item.favoriteMovieID].name;
                    const userName = usersIfors[item.userID].name;
                    return(
                        <li key={item.id}>
                            <p>{`${userName} favourite movie is ${favMovie}`}</p>

                        </li>
                        
                    )
                })
                    }

     
        </div>
   
   )}}

export default UserProfile