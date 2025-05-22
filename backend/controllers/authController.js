const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function signup(req, res) {
  const { username, password } = req.body;
  const repo = req.dataSource.getRepository('User');
  const hashed = await bcrypt.hash(password, 10);
  const user = repo.create({ username, password: hashed, role: 'Employee' });
  await repo.save(user);
  res.status(201).json({ message: 'User registered' });
}

async function login(req, res) {
  const { username, password } = req.body;
  const repo = req.dataSource.getRepository('User');
  const user = await repo.findOneBy({ username });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
  res.json({ token, role: user.role });
}

module.exports = { signup, login };
