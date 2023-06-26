import { theme } from "@/styles/theme";
import styled from "styled-components";
import React, { PropsWithChildren } from "react";
import Link from "next/link";


const {colors: {blue400, blue700}} = theme;

export interface ILinkProps extends PropsWithChildren {
    href?: string
}

export const LinkTo = ({children: link, href}: ILinkProps) => (<Link className="link-to" href={href ?? link as string} target="_blank">{link}</Link>)

export const CustomLink = styled.a`
  text-decoration: underline;
  color: ${blue700};
  &:hover {
    color: ${blue400};
  }
`

export function EmailLink ({children}: PropsWithChildren) {
    return(
        <CustomLink href={`mailto:${children}`}>{children}</CustomLink>
    )
};