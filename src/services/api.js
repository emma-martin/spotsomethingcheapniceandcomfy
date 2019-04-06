const ENDPOINT = '/api/homecards';

const getRooms = () => fetch(ENDPOINT)
.then(response => response.json())




export {getRooms};