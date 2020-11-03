const db = require('./models');
const data = require('./connectionData.json');

db.Connection.deleteMany({}, (err, deletedConnections) => {
    db.Connection.create(data.Connections, (err, seededConnections) => {
        if (err) console.log(err);
        
        console.log(data.Connections.length, 'User Connections created successfully');
        
        process.exit();
    });
});
