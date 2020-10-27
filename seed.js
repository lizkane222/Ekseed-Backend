const db = require('./models');
const data = require('./connectionData.json');

db.UserConnection.deleteMany({}, (err, deletedUserConnections) => {
    db.UserConnection.create(data.UserConnections, (err, seededUserConnections) => {
        if (err) console.log(err);
        
        console.log(data.UserConnections.length, 'User Connections created successfully');
        
        process.exit();
    });
});
