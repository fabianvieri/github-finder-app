import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const RepoList = ({ repos }) => {
	return (
		<div className="rounded-lg shadow-lg card bg-base-100">
			<div className="card-body">
				<h2 className="my-4 text-3xl font-bold card-title">Top Repositories</h2>
				{repos.map((repo) => (
					<RepoItem key={repo.id} repo={repo} />
				))}
			</div>
		</div>
	);
};

RepoList.protoTypes = {
	repos: PropTypes.array.isRequired,
};

export default RepoList;
