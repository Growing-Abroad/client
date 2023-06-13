import { variables } from "@/styles/global-variables";
import styled from "styled-components";
import { theme } from "@/styles/theme";

const { colors: { blue700, yellow400, blue300, blue400 }} = theme;
const { sizes: { maxWidthAll, globalHorizontalPadding, mediaQuery }} = variables;

export const UploadCvWrapper = styled.div`
    display: flex;
    padding-inline: ${globalHorizontalPadding};
    max-width: ${maxWidthAll};
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;
    gap: 72px;
    flex-direction: column;

    @media (max-width: ${mediaQuery}) {
        gap: 25px;
        padding-inline: 40px;
        margin-bottom: 109px;

        .upload-cv-heading2 {
            span {
                white-space: normal;
            }
        }
    }
`

export const UploadCvDetails = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    .cv-paragraqh {
        font-weight: 500;
        max-width: 500px;
        text-align: justify;
        color: ${blue700};
        margin: 0;
    }


    @media (max-width: ${mediaQuery}) {
        gap: 25px;
        flex-direction: column;
    }
`

export const CvForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .padded { 
        max-width: ${maxWidthAll};
        width: 100%;
        padding-inline: ${globalHorizontalPadding};

    }

    .upload-cv-heading3-wrapper,
    .upload-cv-heading4-wrapper {
        justify-content: flex-start;
        width: 100%;
    }

    .upload-cv-heading3 {
        font-size: 2rem;
        line-height: 2.438rem;
    }

    .personal-info-sub-heading {
        font-weight: 400;
        color: ${blue700};
        margin: 6px 0 36px 0;
    }

    .personal-info-inputs-wrapper,
    .skills-wrapper {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 12px 40px;
        width: 100%;
        margin-bottom: 80px;
        align-items: end;
        
        &.smaller-margin-bottom {
            margin-bottom: 12px;
        }
    
    }


    .personal-info-inputs-wrapper {
    }
    .skills-wrapper {
        grid-row-gap: 0px;
        width: 100%;
    }

    .other-info-wrapper {
        display: flex;
        gap: 12px;
        flex-direction: column;
        width: 100%;
    }

    .language-wrapper {
        display: flex;
        align-items: flex-end;
        gap: 40px;
    }

    .upload-docs-container {
        background-color: ${blue300};
        width: 100%;
        display: flex;
        justify-content: center;
        
        .upload-docs-content {
            padding: 60px ${globalHorizontalPadding} 90px;

            .drop-area {
                width: 100%;
                height: 250px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                gap: 24px;
                padding: 40px;
                background-color: white;

                background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='8' stroke-dasharray='12' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
            }

            .drop-message> span,
            .file-details {
                font-weight: 300;
                font-size: 1.25rem;
                line-height: 1.5rem;
                color: ${blue700};
            }
            .label-icon{
                transition: 400ms;
            }
            .file-input-label {
                cursor: pointer;
                transition: 400ms;
                &:hover {
                    /* filter: brightness(1.5); */
                    scale: 1.1;
                    .label-icon {
                        color: ${blue400};
                    }
                }
            }
            .file-input {
                display: none;
            }
            .cv-upload-sub {
                margin-top: 32px;
                margin-bottom: 0;
                color: ${blue400};
            }
        }
    }

    .declaration-of-consent {
        width: 100%;
        max-width: ${maxWidthAll};
        padding-inline: ${globalHorizontalPadding};
        margin-top: 24px;
        display: grid;

        &.newsletter-check {
            margin-top: 54px ;
        }

        .declarations {
            margin-bottom: 0 !important;
        }

        .declaration-checkbox {
        }

        .declaration-paragraqh {
            margin: 0;
            font-size: 1rem;
            line-height: 1.25rem;
            color: ${blue700};
            padding: 12px 0;

            .highlight {
                color: ${blue400};
                text-decoration: none;
            }

        }
        .required-field {
            color: red;
            margin-left: 12px;
            margin-bottom: 0;
            font-size: 0.875rem;
        }
    }
    
    @media (max-width: ${mediaQuery}) {
        display: flex;
        flex-direction: column;
        align-items: center;

        .padded {
            padding-inline: 40px;
        }
        .personal-info-sub-heading {
            margin-top: 16px;
            text-align: center;
        }

        .personal-info-inputs-wrapper,
        .skills-wrapper {
            grid-template-columns: 1fr;
        }

        .language-wrapper {
            flex-direction: column;
            gap: 0px;
        }

        .upload-docs-container {
            .upload-docs-content {
                padding: 60px 40px 75px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }
        
        .declaration-of-consent {
            padding-inline: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;

            .declaration-checkbox {
            }
            .declaration-paragraqh {
               text-align: justify;
               
                .highlight {
                }
            }
        }
    }

    
`