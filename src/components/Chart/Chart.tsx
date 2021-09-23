import React from 'react';
import {ChartWrapper} from './Chart.styled';
import {Post, User} from "../../App.types";
import {Bar} from "react-chartjs-2";
import {ActiveElement, ChartEvent} from "chart.js";
import {backgroundColor} from "./Chart.const";

interface ChartProps {
    users: User[],
    posts: Post[],
    setSelectedPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

export const Chart = ({users, posts, setSelectedPosts}: ChartProps) => {
    const labels = users.map((user) => user.name);
    const usersPostCount = users.map((user) => posts.filter((post) => post.userId === user.id).length);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Number of posts for each user',
                data: usersPostCount,
                backgroundColor: backgroundColor,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        onClick: (event:ChartEvent, element:ActiveElement[]) => {
            if(element.length) {
                setSelectedPosts(
                    posts
                        .filter((post) => post.userId === users[element[0].index].id)
                        .sort((a,b) => {return b.id - a.id})
                        .splice(0, 5));
            }
        }
    }

    return <ChartWrapper>
        <Bar data={data} options={options}/>
    </ChartWrapper>
}