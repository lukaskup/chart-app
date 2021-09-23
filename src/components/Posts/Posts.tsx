import React from 'react';
import { PostsWrapper } from './Posts.styled';
import { Post } from '../../App.types';
import Table from 'react-bootstrap/Table';

interface PostsProps {
    posts: Post[];
}

export const Posts = ({ posts }: PostsProps) => {
    return (
        <PostsWrapper>
            {posts.length ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post: Post) => {
                            return (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            ) : (
                <h2>select bar to display latest user posts</h2>
            )}
        </PostsWrapper>
    );
};
