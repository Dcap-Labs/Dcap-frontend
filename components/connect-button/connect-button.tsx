import { FC, Fragment } from "react";
// import { useMediaQuery } from "@hooks";
import { ConnectButton as RainbowButton } from "@rainbow-me/rainbowkit";

import styles from "./connect-button.module.scss";

export const ConnectButton: FC<ConnectButtonProps> = (
  props: ConnectButtonProps
) => {
  const {} = props;

  // const isMobile = useMediaQuery(992);

  return (
    <Fragment>
      <RainbowButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          mounted,
        }) => {
          return (
            <div
              {...(!mounted && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!mounted || !account || !chain) {
                  return (
                    <button
                      className={styles.btn}
                      onClick={openConnectModal}
                      type="button"
                    >
                      {/* {!isMobile ? (
                        <Wallet
                          style={{
                            verticalAlign: "middle",
                            marginRight: "8px",
                          }}
                          set="curved"
                          primaryColor="currentColor"
                        />
                      ) : null} */}
                      <span> Connect Wallet</span>
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button
                      className={styles.btn}
                      onClick={openChainModal}
                      type="button"
                    >
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <button
                      className={styles.btn}
                      onClick={openChainModal}
                      style={{ display: "flex", alignItems: "center" }}
                      type="button"
                    >
                      {/* {!isMobile && chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 24,
                            height: 24,
                            borderRadius: 999,
                            overflow: "hidden",
                            filter: "hue-rotate(64deg)",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 24, height: 24 }}
                            />
                          )}
                        </div>
                      )} */}
                      {chain.name}
                    </button>

                    <button
                      className={styles.btn}
                      onClick={openAccountModal}
                      type="button"
                    >
                      {/* {!isMobile ? (
                        <Wallet
                          style={{
                            verticalAlign: "middle",
                            marginRight: "8px",
                          }}
                          set="curved"
                          primaryColor="currentColor"
                        />
                      ) : null} */}
                      {account.displayName}
                      {/* {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""} */}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </RainbowButton.Custom>
    </Fragment>
  );
};

interface ConnectButtonProps {}
