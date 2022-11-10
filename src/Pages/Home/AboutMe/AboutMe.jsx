import React from "react";

const AboutMe = () => {
  return (
    <div className="md:flex md:w-[90%] mx-auto mt-16">
      <img
        className="w-[40%] hidden md:flex rounded-2xl"
        src="https://static.wixstatic.com/media/4a538a_f552fb64fe844781b4af558e9b49e593~mv2.jpg/v1/crop/x_0,y_32,w_3744,h_4928/fill/w_558,h_494,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/03_04_21_Chantelle_Portrait11609.jpg"
        alt="aboutme"
        border="0"
      ></img>
      <div className="p-4 md:ml-5">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="font-bold text-orange-500">I am</p>
        <h4 className="text-2xl font-bold">Chantelle Nicholson</h4>
        <p className="md:w-[70%]">
          Im a chief. I have 6 years of exprience of cooking food. I work made
          food form home. She is host of Food Network’s Delicious Miss Brown and
          has appeared on Beat Bobby Flay, Chopped Junior, Cooks vs. Cons,
          Family Food Showdown and Farmhouse Rules.
        </p>
        <div className="overflow-x-auto my-4 border rounded-lg">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Experience</th>
                <th>Email Address</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Chantelle Nicholson</td>
                <td>info@nicholson.com</td>
                <td>+153-659-6542</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
