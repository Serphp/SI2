import React, { useEffect, useState } from "react";
import type { GetServerSideProps } from "next";
//import { api } from "../serve";
import Layout from "./components/Layout";
import Post, { type PostProps } from "./components/Post";
import prisma from './lib/prisma'

export const getServerSideProps: GetServerSideProps = async () => {
    const feed = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return {
      props: { feed },
    };
  };
  
  type Props = {
    feed: PostProps[];
  };

const AboutPage: React.FC<Props> = (props) => {

    // const hello = api.example.getAllUser.useQuery();
    // const getOne = api.example.getOne.useQuery({ id: 1});
    // const getFullUser = api.example.getAllUser.useQuery();
    // const getUser = api.example.getUser.useQuery();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('')
            const json = await res.json()
            console.log(json)
        }
        fetchData()
    }
    , []);

    return (
        <>
    <Layout>
      <section>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
      </section>
        
    </Layout>
        </>
    )
};

export default AboutPage;
