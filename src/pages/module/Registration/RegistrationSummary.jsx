import {
  Box,
  Chip,
  Button,
  Divider,
  Checkbox,
  TextField,
  Typography,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegistrationSummary({ formik }) {
  const navigate = useNavigate();

  const { promoCode } = formik.values;
  const [active, setActive] = useState(false);
  return (
    <Box className="bg-white rounded-xl shadow p-4 mt-4">
      <Box className="rounded-lg p-3 bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white text-[1.3rem] font-bold py-4">
        Registration Summary
      </Box>

      <Box className="space-y-2 mt-6">
        {!active ? (
          <>
            <Box className="flex justify-between">
              <Typography className="!font-bold">PREMIUM TICKET x 2</Typography>
              <Typography className="text-sm">EUR 40.19</Typography>
            </Box>
            <Divider className="!mb-2" />
            <Box className="flex justify-between">
              <Typography className="!font-bold mt-2">
                Student Ticket Access On Day 3 Only
              </Typography>
              <Typography className="text-sm">
                EUR 50 40 SUBJECT TO APPROVAL Incl. 19% VAT
              </Typography>
            </Box>
            <Divider className="!mb-2" />
          </>
        ) : (
          <Box className="bg-[#F0FFF0] border-l-[4px] border-[#299D3F] rounded-[1px] p-3 flex justify-between ">
            <Typography className="text-sm font-normal text-[#1A1A1A] uppercase">
              PREMIUM TICKET X 2
            </Typography>

            <Box className="text-right !space-y-1.5">
              <Box className="flex items-center justify-end space-x-1 gap-2">
                <Typography className="!text-xs text-[#999] line-through whitespace-nowrap">
                  FREE 0.16
                </Typography>
                <Box className="w-[80%]"></Box>
              </Box>

              <Box className="flex items-center justify-end space-x-1 gap-2">
                <Typography className="!text-sm font-bold text-[#299D3F]">
                  FREE 0.16
                </Typography>
                <Chip
                  label="-15%"
                  size="small"
                  sx={{
                    backgroundColor: "#299D3F",
                    color: "#fff",
                    fontWeight: 600,
                    height: 20,
                    fontSize: "0.7rem",
                    borderRadius: 1.5,
                  }}
                />
                <Typography className="!text-xs text-[#999]">
                  INCL. 19% VAT
                </Typography>
              </Box>
            </Box>
          </Box>
        )}

        <Box className="bg-[#F0FFF0] border border-green-300 rounded p-2 mt-4 flex flex-col  space-x-2 !px-3 !pb-3">
          <Typography
            className={`${
              !active ? "text-[#26923B]" : "text-[#000000]"
            } !font-bold`}
          >
            Have a promo code?
          </Typography>

          <Box className="flex flex-row gap-2">
            <TextField
              variant="standard"
              placeholder=" Enter Promo code"
              className="w-[94%] !mt-2"
              id="promoCode"
              name="promoCode"
              value={formik.values.promoCode.toUpperCase()}
              onChange={(e) => {
                formik.setFieldValue(
                  "promoCode",
                  e.target.value.toUpperCase().trim()
                );
              }}
              InputProps={{
                disableUnderline: true,
                className: "!bg-[#FFFFFF]",
              }}
            />
            <Button
              disabled={promoCode === "" ? true : false}
              variant="contained"
              onClick={() => setActive(true)}
              className="bg-gradient-to-r from-[#9F1413] to-[#000000] !px-4 !mt-2"
              size="small"
            >
              APPLY
            </Button>
          </Box>

          {active && (
            <>
              <Typography variant="subtitle2" className="text-[#198754] !mt-3">
                Promo code "{promoCode ?? ""}" applied successfully! Applied to
                2 lowest-priced tickets!
              </Typography>

              <Box className="bg-white p-3 flex justify-between mt-2">
                <Box className="!space-y-1">
                  <Typography className="text-sm text-[#1A1A1A]">
                    Promo code applied:{" "}
                    <span className="text-[#299D3F] font-medium">
                      {promoCode ?? ""}
                    </span>
                  </Typography>

                  <Typography className="text-sm text-[#1A1A1A]">
                    Promo code applied:{" "}
                    <span className="text-[#299D3F] font-medium">
                      15% (EUR 0.06 incl. VAT)
                    </span>
                  </Typography>

                  <Typography className="text-sm text-[#1A1A1A]">
                    Applied to:{" "}
                    <span className="text-[#299D3F] font-medium">
                      2 lowest-priced tickets
                    </span>
                  </Typography>
                </Box>
                <Button
                  size="small"
                  onClick={() => {
                    setActive(false);
                    formik.setFieldValue("promoCode", "");
                  }}
                  variant="outlined"
                  className="!rounded-[8px]  !border-[#C7000C] !border-[2px] !text-[#C7000C] !font-bold normal-case h-fit self-center"
                >
                  Remove
                </Button>
              </Box>
            </>
          )}
        </Box>

        {active && (
          <>
            <Box className="flex justify-between !mt-8">
              <Typography className="!font-bold mt-2">
                Student Ticket Access On Day 3 Only
              </Typography>
              <Typography className="text-sm">
                EUR 50 40 SUBJECT TO APPROVAL Incl. 19% VAT
              </Typography>
            </Box>
            <Divider className="!mb-2" />
            <Box className="flex justify-between !mt-8">
              <Typography className="!font-bold">
                <span className="text-xs !font-bold">Total: </span>{" "}
                <span className="line-through text-[#7D7D7D]">EUR 300</span> EUR
                150 <span className="text-xs !font-normal">Incl. 19% VAT</span>
              </Typography>
              <Typography className="text-sm !space-x-2">
                <Button
                  onClick={() => {
                    setActive(false);
                    formik.setFieldValue("promoCode", "");
                  }}
                  variant="outlined"
                  className="rounded-[8px] !border-[2px] !border-[#262626] !text-[#262626] !font-bold normal-case"
                >
                  Back
                </Button>
                <Button
                  disabled={formik.values.product.length === 0}
                  variant="contained"
                  className="bg-gradient-to-r from-[#299D3F] to-[#123F22] text-white"
                  onClick={() => navigate("/success")}
                >
                  Next
                </Button>
              </Typography>
            </Box>
          </>
        )}

        {!active && (
          <Box className="flex justify-end mt-4">
            <Typography className="!font-bold">
              <span className="text-xs !font-bold">Total: </span> EUR 300{" "}
              <span className="text-xs !font-normal">Incl. 19% VAT</span>
            </Typography>
          </Box>
        )}

        <Box className="space-y-2 mt-4">
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  mb: 2.5,
                  color: "#000000",
                  "&.Mui-checked": {
                    color: "#000000",
                  },
                }}
              />
            }
            className="text-xs"
            label={
              <Typography className="text-xs">
                I have read and accept the{" "}
                <span className="text-red-500 underline">
                  terms and conditions
                </span>
                , <span className="text-red-500 underline">Privacy Policy</span>
                , and consent that attendees under the age of 21 will not be
                admitted, and admission to the exhibition is restricted to trade
                and business professionals only, and students above 16 and below
                18 can attend only if accompanied by school or faculty member{" "}
                <span className="text-red-500">*</span>
              </Typography>
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                sx={{
                  mb: 2.5,
                  color: "#000000",
                  "&.Mui-checked": {
                    color: "#000000",
                  },
                }}
              />
            }
            className="text-xs"
            label={
              <Typography className="text-xs">
                I hereby consent the use of my data by the organiser, exhibitors
                and sponsors of DWTC & KAOUM International to delivering
                services and for marketing purposes. I am aware that I can
                object to the sending of newsletters at any time{" "}
                <span className="text-red-500">*</span>
              </Typography>
            }
          />
        </Box>
      </Box>
    </Box>
  );
}
