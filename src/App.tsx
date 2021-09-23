import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AppWrapper } from './App.styled';
import { Chart } from './components/Chart';
import { Posts } from './components/Posts';
import { Post, User } from './App.types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const App = () => {
    const [selectedPosts, setSelectedPosts] = useState<Post[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const usersRequest = axios.get('https://jsonplaceholder.typicode.com/users');
        const postsRequests = axios.get('https://jsonplaceholder.typicode.com/posts');
        Promise.all([usersRequest, postsRequests]).then((res) => {
            setUsers(res[0].data);
            setPosts(res[1].data);
        });
    }, []);

    return (
        <Container className={'p-3'}>
            <AppWrapper>
                <h1>Chart App</h1>
                <Chart users={users} posts={posts} setSelectedPosts={setSelectedPosts} />
                <Posts posts={selectedPosts} />
            </AppWrapper>
        </Container>
    );
};

export default App;
