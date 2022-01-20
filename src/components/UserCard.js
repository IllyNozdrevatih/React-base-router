import "react";

function UserCard(prop) {
  return (
    <div className="card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{prop.userItem.name}</h5>
        <h6 className="card-title">{prop.userItem.email}</h6>
        <p className="card-text mt-auto">{prop.userItem.status}</p>
      </div>
    </div>
  );
}

export default UserCard;
