import { Config } from "../config/config";

export default async function hashnodeFeed() {

    const query = `
    {
        user(username: "superflows") {
            publication {
                posts{
                    slug
                    title
                    brief
                    coverImage
                    dateAdded
                }
            }
        }
    }
    `;

    const response = await fetch('https://api.hashnode.com', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })

    const responseJson = (await response.json()).data.user.publication.posts;
    for(var i = 0; i < responseJson.length; i++) {
        responseJson[i].dateAdded = timeSince(new Date(responseJson[i].dateAdded))
    }
    return responseJson;

}

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }