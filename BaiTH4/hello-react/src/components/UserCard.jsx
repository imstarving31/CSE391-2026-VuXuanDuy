function UserCard({ name, email, avatar }) {
  return (
    <article className="user-card">
      <img src={avatar} alt={`Ảnh đại diện của ${name}`} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </article>
  );
}

export default UserCard;
