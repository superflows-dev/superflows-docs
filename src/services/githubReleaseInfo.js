export default async function githubReleaseInfo() {
    const user = 'superflows-dev';
    const repo = 'react-sf-building-blocks';
    const token = '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';
    const endpoint = 'https://api.github.com';
    const creds = `${user}:${token}`;
    const auth = btoa(creds);
    const resource = '/repos/'+user+'/'+repo+'/releases';

    const options = {
        mode: 'cors',
        headers: {
            'Authorization': 'Basic ' + auth,
        }
    }

    const response = await fetch(`${endpoint}${resource}`, options)
    const responseJson = await response.json();
    const ret = {
        repo: repo,
        url: responseJson[0].html_url,
        name: responseJson[0].name,
        timestamp: timeSince(new Date(responseJson[0].published_at)),
        author: {
            login: responseJson[0].author.login,
            profile: responseJson[0].author.avatar_url
        }
    }
    return ret;
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