import { Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

export default function BreadcrumbCompo({ path }) {
  const router = useRouter();
  const [pathType, setType] = useState();
  const slug = router.query.slug;
  const config = {
    typeOfHierarchy: {
      projects: {
        headings: ["home", "project", slug],
        paths: ["", "projects", slug],
      },
      posts: {
        headings: ["home", "project", slug],
        paths: ["", "posts", slug],
      },
    },
  };
  useEffect(() => {
    setType(config.typeOfHierarchy[path.type]);
  }, []);

  return (
    <>
      <Breadcrumb spacing="8px" separator={<FiChevronRight color="gray.500" />}>
        {pathType &&
          pathType.headings.map((each, index) => {
            return (
              <BreadcrumbItem key={index} cursor={"pointer"}>
                <Link
                  scroll={false}
                  href={
                    pathType.paths[index] === slug
                      ? "#"
                      : `/${pathType.paths[index]}`
                  }
                >
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    color={each === slug ? "orange" : ""}
                    fontWeight={each === slug ? "bold" : ""}
                  >
                    {each.toUpperCase()}
                  </Text>
                </Link>
              </BreadcrumbItem>
            );
          })}
      </Breadcrumb>
    </>
  );
}
