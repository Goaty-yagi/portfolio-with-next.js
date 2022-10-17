import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
export default function BreadcrumbCompo({ path }) {
  const router = useRouter();
  const [pathType, setType] = useState() 
  const config = {
    typeOfHierarchy: {
      projects: {
        headings: ["home", "project", router.query.slug],
        paths: ["", "projects", router.query.slug],
      },
      posts: {
        headings: ["home", "project", router.query.slug],
        paths: ["", "posts", router.query.slug],
      },
    },
  };
  useEffect(() => {
    setType(config.typeOfHierarchy[path.type])
  },[])
  
  return (
    <>
      <Breadcrumb spacing="8px" separator={<FiChevronRight color="gray.500" />}>
        {pathType &&
          pathType.headings.map((each, index) => {
            return (
              <BreadcrumbItem key={index}>
                <Link scroll={false} href={pathType.paths[index]===router.query.slug?"#":`/${pathType.paths[index]}`}>
                  <Text
                    _hover={{textDecoration:"underline"}}
                    color={each===router.query.slug?"orange":''}
                    fontWeight={each===router.query.slug?"bold":''}
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
