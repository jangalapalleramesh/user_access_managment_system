async function createSoftware(req, res) {
  const { name, description, accessLevels } = req.body;
  const repo = req.dataSource.getRepository('Software');
  const software = repo.create({ name, description, accessLevels });
  await repo.save(software);
  res.status(201).json(software);
}

async function listSoftware(req, res) {
  const repo = req.dataSource.getRepository('Software');
  const softwares = await repo.find();
  res.json(softwares);
}

module.exports = { createSoftware, listSoftware };
