import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function PublicProfile() {

  // ✅ Get user id from URL
  const { id } = useParams();

  const [experiences, setExperiences] = useState([]);
  const [user, setUser] = useState(null);

  // ✅ Load portfolio data
  useEffect(() => {

    axios.get(
      `http://localhost:8080/experience/${id}`
    )
    .then(res => {

      setExperiences(res.data);

      // get user info from experience
      if(res.data.length > 0){
        setUser(res.data[0].user);
      }
    });

  }, [id]);

  return (

    <div className="container mt-5">

      {/* ===== PROFILE HEADER ===== */}
      <div className="text-center mb-5">

        <img
          src={
            user?.profilePhoto
              ? `http://localhost:8080/uploads/${user.profilePhoto}`
              : "https://via.placeholder.com/150"
          }
          alt="profile"
          className="rounded-circle shadow mb-3"
          width="150"
          height="150"
        />

        <h2 className="fw-bold">
          {user?.name || "Portfolio"}
        </h2>

        <p className="text-muted">
          Professional Experience Portfolio
        </p>

      </div>

      {/* ===== EXPERIENCE SECTION ===== */}
      <h3 className="mb-4 text-center">
        Experience Timeline
      </h3>

      {experiences.length === 0 ? (

        <h5 className="text-center">
          No Experience Added
        </h5>

      ) : (

        experiences.map(exp => (

          <div
            key={exp.id}
            className="card shadow border-0 mb-4"
          >

            <div className="card-body">

              <h4 className="fw-bold">
                {exp.company}
              </h4>

              <h6 className="text-muted">
                {exp.role}
              </h6>

              {exp.duration &&
                <p>
                  Duration: {exp.duration}
                </p>
              }

              {exp.description &&
                <p>
                  {exp.description}
                </p>
              }

            </div>

          </div>

        ))
      )}

    </div>
  );
}

export default PublicProfile;