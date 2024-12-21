import React from 'react'
import {
  Box,
  Grid2 as Grid,
  Typography,
  IconButton,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  Container,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useTheme } from '@mui/material/styles'

const AppHeaderBanner = () => {
  const vectorTelecomLogo = '/img/vector-telecom/vector-telecom-logo.png'
  const inStockGif = '/img/vector-telecom/in-stock.gif'
  const theme = useTheme()

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          height: theme.typography.pxToRem(118), // 可以根据需要调整
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 2, // 给组件添加一点内边距
          // backgroundColor: 'blue', // 背景色
        }}>
        {/* 左侧 LOGO */}
        <Box
          sx={{
            flexShrink: 0,
            height: '100%', // 高度随父容器自适应
            width: 'auto',
            maxWidth: '20%', // 最大宽度占父容器的20%
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: 'yellow',
          }}>
          <img
            src={vectorTelecomLogo} // 替换为你自己的LOGO路径
            alt="Logo"
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* 中间空白部分 */}
        <Box sx={{ flexGrow: 1 }} />

        {/* 右侧容器 */}
        {/* alignItems: 'center',  */}
        <Box sx={{ display: 'flex', height: '100%', flexGrow: 0 }}>
          <Grid container spacing={2} alignItems="center" sx={{ height: '100%' }}>
            {/* 左侧：In Stock 图片 */}
            <Grid
              size={2}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}>
              <img
                src={inStockGif} // 替换为你自己的动态图路径
                alt="In Stock"
                style={{
                  height: '100%', // 确保图像高度随父容器的高度变化
                  width: 'auto', // 宽度根据高度按比例缩放
                  maxWidth: '100%', // 限制宽度不超过容器宽度
                  objectFit: 'contain', // 保持图像比例，避免拉伸或溢出
                }}
              />
            </Grid>

            {/* 右侧：搜索区域 */}
            <Grid
              container
              size={10}
              sx={{ height: '100%', backgroundColor: 'purple', marginRight: 0 }}
              spacing={0}>
              {/* 上侧：搜索站点 */}
              <Box
                sx={{
                  flexGrow: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: '50%',
                  backgroundColor: 'pink',
                }}>
                <SearchIcon sx={{ marginRight: 1 }} />
                <Typography
                  variant="body1"
                  sx={{
                    marginRight: 2,
                    minWidth: theme.typography.pxToRem(100),
                    whiteSpace: { xs: 'normal', sm: 'nowrap' },
                  }}>
                  Search Site
                </Typography>
                <TextField
                  placeholder="Search..."
                  sx={{
                    width: '200px',
                    borderRadius: 0, // 直角边框
                    height: '60%', // 高度随父容器自适应
                    '& .MuiInputBase-root': {
                      paddingRight: 0,
                      borderRadius: 0, // 直角边框
                      height: '100%', // 确保输入框高度继承父容器
                      display: 'flex',
                      justifyContent: 'flex-start', // 水平居中
                      alignItems: 'center', // 垂直居中文本
                    },
                    '& input': {
                      textAlign: 'left', // 文字居中显示
                    },
                    // 响应式宽度
                  }}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton size="small">
                            <SearchIcon />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </Box>

              {/* 下侧：搜索产品 */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  height: '100%',
                  backgroundColor: 'orange',
                }}>
                <SearchIcon sx={{ marginRight: 1 }} />
                {/* <Typography
                    variant="body1"
                    sx={{
                      marginRight: 2,
                      minWidth: theme.typography.pxToRem(100),
                      whiteSpace: { xs: 'normal', sm: 'nowrap' },
                    }}>
                    Search Product
                  </Typography> */}
                {/* <Select defaultValue="1" sx={{ marginRight: 0, width: '200px', height: '60%' }}>
                    <MenuItem value="1">Product 1</MenuItem>
                    <MenuItem value="2">Product 2</MenuItem>
                    <MenuItem value="3">Product 3</MenuItem>
                  </Select> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  )
}

export default AppHeaderBanner
