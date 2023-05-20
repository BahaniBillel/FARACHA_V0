import React from "react";
import { useRouter } from "next/router";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AiFillFacebook, AiFillInstagram, AiFillMail } from "react-icons/ai";
import Link from "next/link";

function OneBlog({ blog, blogs }) {
  const paragraphs = [
    `Today, Sephora and TikTok, along with partner agency Digitas, 
    announce the launch of a partnership designed for new, founder-led 
    beauty brands to navigate the world of creator content. The Sephora x 
    TikTok Incubator Program will connect TikTok creators to best-in-class 
    beauty brands from the Sephoras Accelerate program, helping them learn 
    impactful social content strategies through a series of educational training modules. 
    Participating brands will hear from #beautytok creators such as, Amy Chang, Rocio Lopez-Jimenez and Nyma Tang.`,
    `“The future of brand storytelling lies in the hands of multicultural creators, and by championing diverse creators, brands can unlock their full potential on TikTok,” said Soniya Monga, Head of US Agency Partnerships, TikTok. “Our partnership with Sephora and Digitas aims to educate brands on the importance of a DEI-first approach to creator partnerships. Together, we are building a framework that celebrates diversity and intersectionality, 
    ensuring that every brand can accelerate their growth and success on TikTok through inclusive and impactful storytelling.”`,
    `“Brands that have a savvy understanding of creator led social media and creator relations have a clear advantage in not only conceptualizing beauty content that resonates with their audience, but also in building genuine connections,” said Brent Mitchell, VP of Marketing, Social and Influencer at Sephora. “At Sephora, we have long been known as a brand builder in the prestige beauty landscape, and we are thrilled to partner 
    with TikTok to share this unique creator-driven perspective with our brands and build a more inclusive beauty community.”`,
    `Topicals, Eadem and Hyper Skin, three brands from the 2021 Sephora Accelerate cohort, will take part in launch of this program, with three additional groups to follow, giving a total of 12 brands the opportunity to create long-lasting partnerships with up-and-coming creator talent on TikTok, which has over one billion monthly active users.`,
    `Launched in 2016, the Sephora Accelerate program continues to build a community of innovative, inspirational brand founders in the prestige beauty space, and creates a foundation, network and ecosystem for brands to launch and thrive. Sephora Accelerate features a 360-degree, six-month curriculum with mentorship, merchandising support, grants and investor connections to all participants, with the opportunity to launch at Sephora North America upon completion. The Sephora Accelerate X TikTok Incubator Program is an added offering that will be extended to 12 Sephora Accelerate brands this year.`,
    `For more information, please contact: Jess Diah, DeVries Global
    jdiah@devriesglobal.com`,
  ];

  const router = useRouter();
  console.log(router.query, blog, blogs);
  return (
    <div className="font-sans px-10 md:px-28 pt-20 flex flex-col items-center">
      <div className="flex flex-col justify-center items-center space-y-3 md:px-44">
        <p className="text-gray-600 text-sm font-sans ">Featured</p>
        <h1 className=" text-2xl md:text-3xl leading-relaxed font-semibold text-center">
          Faracha and TikTok Partner to Pioneer New Program for Rising Beauty
          Brands and Content Creators
        </h1>
      </div>
      {/* blog info and social links */}

      <div className="my-5 text-xs flex flex-row space-x-5">
        <p>13 MARS 203j3</p>
        <div className="flex flex-row space-x-2">
          <Link
            href="https://www.facebook.com/profile.php?id=100092565812907&mibextid=ZbWKwL"
            passHref
          >
            <AiFillFacebook className="h-5 w-5 text-blue-800" />{" "}
          </Link>
          <Link
            href="https://instagram.com/faracha.algeria?igshid=ZGUzMzM3NWJiOQ=="
            passHref
          >
            <AiFillInstagram className="h-5 w-5 text-fuchsia-700" />{" "}
          </Link>
          <Link href="/">
            <AiFillMail className="h-5 w-5" />{" "}
          </Link>
        </div>
      </div>
      <div className="md:px-28 tracking-wide text-justify">
        {paragraphs.map((p, i) => {
          return (
            <p
              key={i}
              className={`text-lg leading-relaxed my-5  ${
                i === 0
                  ? "first-letter:text-7xl first-letter:float-left first-line:uppercase first-line:tracking-widest first-letter:mr-3"
                  : null
              }`}
            >
              {p}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default OneBlog;

export async function getStaticPaths() {
  // Fetching blogs slugs for dynamic routing
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map((doc) => doc.data());
  const paths = blogs.map((blog) => ({
    params: { slug: blog.name },
  }));

  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blogRef = doc(db, "blogs", params.slug);
  const blogSnapshot = await getDoc(blogRef);
  console.log(params.slug);

  if (!blogSnapshot.exists()) {
    return {
      notFound: true,
    };
  }

  const blog = blogSnapshot.data();
  // getting reference to products collection
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map((doc) => doc.data());

  return {
    props: { blog: blog, blogs: blogs },
    revalidate: 1, // optional, allows for incremental static regeneration
  };
}
