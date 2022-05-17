const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const route = require('./routes/index');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/lorem', route);

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
