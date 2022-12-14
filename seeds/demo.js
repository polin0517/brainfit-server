const usersData = require('./seed_data/users');
const exercisesData = require('./seed_data/exercises');
const commentsData = require('./seed_data/comments');

exports.seed = function (knex) {
	return knex('users')
		.del()
		.then(function() {
			return knex('users').insert(usersData);
		})
		.then(() => {
			return knex('exercises').del();
		})
		.then(() => {
			return knex('exercises').insert(exercisesData);
		})
		.then(() => {
			return knex('comments').del();
		})
		.then(() => {
			return knex('comments').insert(commentsData);
		});
};
