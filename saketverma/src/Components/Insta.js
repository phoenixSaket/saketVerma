import React, { useEffect, useState } from 'react';
import InstaBlocks from './InstaBlocks';
import './InstaBlock.css';
import './InstaDetails.css';

function Insta() {

    const [posts, setPosts] = useState([]);
    const [profile, setProfile] = useState([]);
    const [width, setWidth] = useState('47%');

    const screenWidth = window.innerWidth;
    // console.log(screenWidth);


    useEffect(() => {
        fetch("https://www.instagram.com/saket.verma/?__a=1")
            .then(response => response.json())
            .then((jsonData) => {
                // jsonData is parsed json object received from url
                // console.log("DATA ", jsonData);
                setProfile({
                    profilePic: jsonData.graphql.user.profile_pic_url_hd,
                    biography: jsonData.graphql.user.biography,
                    name: jsonData.graphql.user.full_name,
                    followers: jsonData.graphql.user.edge_follow.count,
                    followedBy: jsonData.graphql.user.edge_followed_by.count,
                    posts: jsonData.graphql.user.edge_owner_to_timeline_media.count,
                })
                setPosts(jsonData.graphql.user.edge_owner_to_timeline_media.edges);
                if(screenWidth < 700) {
                    setWidth('90%');
                }
            })
            .catch((error) => {
                // handle your errors here
                // console.error(error)
            })
    }, [screenWidth]);

    const tryRender = [];

    posts.forEach(element => {
        // console.log(element);
        let dataToSend = {
            imageURL: element.node.display_url,
            width: width,
            height: element.node.dimensions.height,
            username: element.node.owner.username,
            likes: element.node.edge_media_preview_like.count,
            comments: element.node.edge_media_to_comment.count,
            avatar: profile.profilePic,

        }

        if (!!element.node.edge_sidecar_to_children) {
            dataToSend = {
                ...dataToSend,
                isMulti: true,
                multiple: element.node.edge_sidecar_to_children.edges,
            }
        } else {
            dataToSend = {
                ...dataToSend,
                isMulti: false,
            }
        }

        if (!!element.node.edge_media_to_caption.edges && !!element.node.edge_media_to_caption.edges[0]) {
            // console.log(element.node.edge_media_to_caption.edges);
            dataToSend = {
                ...dataToSend,
                caption: element.node.edge_media_to_caption.edges[0].node.text,
            }
        } else {
            dataToSend = {
                ...dataToSend,
                caption: null,
            }
        }

        tryRender.push(<InstaBlocks props={dataToSend} />);
    });

    // console.log(profile);
    return (
        <div>
            <div className="instaDetails">
                <div className="profilePic">
                    <img src={profile.profilePic} alt="profile" className="profile" />
                </div>
                <div className="accountDetails">
                    <div className="accountName">
                        {profile.name}
                    </div>
                    <div className="followDetails">

                        <div className="posts">
                            <div className="textBreak"><b>Posts</b><br />
                                {profile.posts}
                            </div>
                        </div>
                        <div className="followers">
                            <div className="textBreak"><b>Following</b><br />
                                {profile.followers}
                            </div>
                        </div>
                        <div className="following">
                            <div className="textBreak"><b>Followers</b><br />
                                {profile.followedBy}
                            </div>
                        </div>

                    </div>
                    <div className="biography">
                        <pre>{profile.biography}</pre>
                    </div>
                </div>
            </div>
            <div className="settings">
                <i class="fa fa-th notOnMobile" aria-hidden="true" onClick={() => { setWidth('30%') }}></i>
                <i class="fa fa-th-large" aria-hidden="true" onClick={() => { setWidth('47%') }}></i>
                <i class="fa fa-square" aria-hidden="true" onClick={() => { setWidth('90%') }}></i>
            </div>

            <div className="InstagramContainer"
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    backgroundColor: '#ffffff'
                }}
            >
                {tryRender}
            </div>
        </div>
    )
}

export default Insta;