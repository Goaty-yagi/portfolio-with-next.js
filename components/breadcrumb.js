import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiChevronRight } from "react-icons/fi";

export default function BreadcrumbCompo({ obj }) {
  const router = useRouter();
  const allRoutes = router.asPath.split("/");
  const currentPath = router.asPath
  const keyPaths = ["projects", "posts"]
  const config = {
    typeOfHierarchy:[
      {projects:["home", "project", "slug"]},
      {posts:["home", "post", "slug"]}
    ]
  }
  const currentType = () => {
    const type = config.typeOfHierarchy.find((each) => {
      
    })
    return type
  }

  console.log(allRoutes, router, currentType());
  return (
    <>
      <Breadcrumb spacing="8px" separator={<FiChevronRight color="gray.500" />}>
        {allRoutes.map((each, index) => {
          return (
            <BreadcrumbItem key={index}>
              <Link
                href={ `/${allRoutes[index]}`}
              >
                {index === 0 ? "HOME" : allRoutes[index].toUpperCase()}
              </Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </>
  );
}
