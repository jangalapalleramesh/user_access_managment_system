async function createRequest(req, res) {
  const { softwareId, accessType, reason } = req.body;
  const userRepo = req.dataSource.getRepository('User');
  const softwareRepo = req.dataSource.getRepository('Software');
  const requestRepo = req.dataSource.getRepository('Request');

  const user = await userRepo.findOneBy({ id: req.user.id });
  const software = await softwareRepo.findOneBy({ id: softwareId });

  const request = requestRepo.create({ user, software, accessType, reason, status: 'Pending' });
  await requestRepo.save(request);
  res.status(201).json(request);
}

async function getPendingRequests(req, res) {
  const requestRepo = req.dataSource.getRepository('Request');
  const requests = await requestRepo.find({ where: { status: 'Pending' }, relations: ['user', 'software'] });
  res.json(requests);
}

async function updateRequestStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  const requestRepo = req.dataSource.getRepository('Request');
  const request = await requestRepo.findOneBy({ id: parseInt(id) });
  if (!request) return res.status(404).json({ message: 'Request not found' });

  request.status = status;
  await requestRepo.save(request);
  res.json(request);
}

module.exports = { createRequest, getPendingRequests, updateRequestStatus };
