import Link from "next/link";
import { Suspense } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
 
 
} from "@nextui-org/react";
import HeaderAuth from "./HeaderAuth";
import SearchInput from "./search-input";

export default  function Header() {
  
 
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Suspense fallback={<div>Loading...</div>}>
          <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end"><HeaderAuth/></NavbarContent>
    </Navbar>
  );
}
