import React,{useState} from 'react';
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  useColorModeValue
} from '@chakra-ui/react';
import {App} from './snow'
import {Header} from './header'
import {Footer} from './footer'
import Styles from './css/cursor.module.css';
import {css} from '@emotion/css';
import axios from "axios"


export default function LoginForm() {

const [data, setData] = React.useState();
const url = "http://127.0.0.1:8000";

const GetData = () => {
	axios.get(url).then((res)=>{
	setData(res.data)
});
};

const GetUsers = () => {
	axios.get(url + '/users/').then((res)=>{
	setData(res.data)
});
};


const CreateUser = (email:string,password:string) =>{
	axios.post('http://localhost:8000/users/', {
	  email: email,
	  password: password
}
)
}

GetUsers()


const color = useColorModeValue("#006400", "#000")
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [startflag, setStartflag] = useState(false);
const handleSubmit = event => {
	event.preventDefault();
	GetUsers()
	for(var index in data){
		if(data[index].email==email){
			alert(`already exist`)
			return
		}
	}
	CreateUser(email,password)
	setStartflag(true)
	alert(`Create!`)
};
const CreateStart = () => {
if(startflag){
	return(
		<Button width="full" mt={8} type="submit" bg="red" _hover={{bg:'darkred'}}>
			Start
		</Button>
	)
	}else{
	return (
          <form onSubmit={handleSubmit}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="test@test.com" 
onChange={event => setEmail(event.currentTarget.value)}/>
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="*******" />
            </FormControl>
		<Button width="full" mt={4} type="submit" bg="blue" _hover={{bg:'darkblue'}}>
			Sign Up
		</Button>
          </form>
	)
}
}

return (
<>

	{App()}
	<Box className={ `${Styles.cursor} ${styles.box}` } bg={color} opacity="0.8" color="#ffffff" >
		<Box>
			<Header />
		</Box>
		<Box  h={100}>
		</Box>
    <Flex width="full" align="center" justifyContent="center">
		<Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="#006633" className={Styles.cursor2}>
        <Box textAlign="center">
          <Heading>{startflag?'  Game ':'Sign Up'}</Heading>
		</Box>
        <Box my={4} textAlign="left">
	{CreateStart()}
        </Box>
      </Box>
    </Flex>
	</Box>
</>
);
}


const styles={
	box:css`
		height:100vh;
		width:100%;
`,
	form:css`
		display:flex;
`
}
