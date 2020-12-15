import React, { useEffect, useState } from 'react';
import InstaBlocks from './InstaBlocks';
import './InstaBlock.css';

function Insta() {

    const [posts, setPosts] = useState([]);
    const [width, setWidth] = useState('45%');

    useEffect(() => {
        fetch("https://www.instagram.com/saket.verma/?__a=1")
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                setPosts(jsonData.graphql.user.edge_owner_to_timeline_media.edges);
            })
            .catch((error) => {
                // handle your errors here
                console.error(error)
            })
    }, [])



    const tryRender = [];

    posts.forEach(element => {
        console.log(element);
        const dataToSend = {
            imageURL: element.node.display_url,
            width: width,
            height: element.node.dimensions.height,
            username: element.node.owner.username,
            likes: element.node.edge_media_preview_like.count,
            comments: element.node.edge_media_to_comment.count
        }
        tryRender.push(<InstaBlocks props={dataToSend} />);
    });

    return (
        <div>
            <div className="settings darkBG">
                <i class="fa fa-th notOnMobile" aria-hidden="true" onClick={() => { setWidth('30%') }}></i>
                <i class="fa fa-th-large" aria-hidden="true" onClick={() => { setWidth('45%') }}></i>
                <i class="fa fa-square" aria-hidden="true" onClick={() => { setWidth('90%') }}></i>
            </div>

            <div className="InstagramContainer"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    backgroundColor: '#f1f1f1'
                }}
            >


                {tryRender}
            </div>
        </div>
    )
}

export default Insta;