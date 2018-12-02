const models = require('../../models');
const { Company } = models;

exports.destroy = (req, res) => {
	const { token, user } = req;
	const { id } = req.query;
	Company.find({ where: { id, owner: user.id } })
		.then(company => {
			company.destroy().then(result => {
				res.status(200).send({
					success: true,
					result
				});
			});
		})
		.catch(error => {
			res.status(401).send({
				success: false,
				error
			});
		});
};
