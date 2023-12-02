import styled, { css } from 'styled-components';

export const StyledNavBar = styled.nav`
    min-height: 37px;
`;

export const StyledToLogo = styled.div`
    cursor: pointer;
    font-size: 22px;
    padding: 0 5px;
    white-space: nowrap;
    width: 72px;
    position: absolute;
    left: 20px;
    top: 2px;
    &:hover {
        transition: 0.3s all;
        background-color: #0000e9;
    }
`;

export const StyledNavBtnsWrapper = styled.div`
    position: absolute;
    right: 4px;
    top: 0.5px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    button {
        width: 42px;
        margin-left: 10px;
    }
`;

export const StyledNavsWrapper = styled.div<{ isOpenedBurger: boolean }>`
    padding: 0 110px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
    border-bottom: 2px solid #f5f5f5;
    border-radius: 6px 6px 0 0;
    background-color: #00007c;
    button {
        margin-left: auto;
        &:first-child {
            display: none;
        }
    }
    @media (max-width: 539px) {
        button {
            &:first-child {
                display: block;
            }
        }
        flex-direction: column;
        overflow: hidden;
        ${({ isOpenedBurger }) =>
            isOpenedBurger
                ? css`
                      height: auto;
                      gap: 5px;
                      text-align: center;
                      padding: 0;
                      & > * {
                          width: 100%;
                      }
                  `
                : css`
                      height: 37px;
                  `};
    }
`;
