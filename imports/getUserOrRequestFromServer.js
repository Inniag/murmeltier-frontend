import axios from 'axios';

export default async function getUserOrRequestFromServer() {
    // load persisted data from localstorage to state
    if (localStorage.getItem('murmelLocalData')) {
        console.log("we have localstorage data, get it from there")
        try {
            const murmelLocalData = JSON.parse(localStorage.getItem('murmelLocalData'));
            console.log("murmelLocalData: ")
            console.log(murmelLocalData)
            return murmelLocalData
        } catch (e) {
            localStorage.removeItem('murmelLocalData');
        }

        // no local storage data yet, have to get userId and set localstorage:
    } else {
        console.log("no local storage data yet, have to get userId and set localstorage")

        const userData = await axios.post(`http://ec2-18-184-6-227.eu-central-1.compute.amazonaws.com:8080/user`, {}, {
            // crossdomain: true,
            headers: { 'Access-Control-Allow-Origin': '*' }
        });

        console.log("userData")
        console.log(userData)

        const murmelLocalData = {
            userId: userData.data.id,
            accessKey: userData.data.password
        }

        const parsed = JSON.stringify(murmelLocalData);
        localStorage.setItem('murmelLocalData', parsed);

        return murmelLocalData
    }
}
