<template>
  <div>
    <el-row type="flex" class="row-bg" justify="end">

      <el-col :span="3">
        <el-button type="primary" size="medium" @click="createImagesDialogVisible = true">创建网络</el-button>

        <el-button type="danger" size="medium">删除网络</el-button>

      </el-col>

    </el-row>

    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      stripe="true"
      border="true"
      height="800"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
       <el-table-column
        prop="project"
        label="项目"
        width="200">
       </el-table-column>
      <el-table-column
        prop="name"
        label="网络名称"
        width="200">
      </el-table-column>
      <el-table-column
        prop="cidr"
        label="子网已连接"
        width="200">
      </el-table-column>
       <el-table-column
        prop=""
        label="DHCP管理程序"
        width="200">
      </el-table-column>
      <el-table-column
        prop="shared"
        label="共享"
        width="200">
      </el-table-column>
      <el-table-column
        prop="external"
        label="外部"
        width="200">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="100">
      </el-table-column>
      <el-table-column
        prop="admin_state_up"
        label="管理状态"
        width="100">
      </el-table-column>
      <el-table-column
        label="Actions"
      >
        <template slot-scope="scope">
          <el-dropdown split-button type="primary" @click="handleClick" size="small">
            编辑网络
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="images_delete_one(scope.row.id)"
                                v-loading.fullscreen.lock="fullscreenLoading" divided>删除网络
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>

    </el-table>





  </div>

</template>

<script>
  export default {
    name: 'image',
    components: {},
    data () {
      return {
        fullscreenLoading: false,
        multipleSelection: [],
        createImagesDialogVisible: false,
        editImagesDialogVisible: false,
        formLabelWidth: '100px',
        fileList: [],
        create_image_form: {
          name: '',
          description: '',
          image_source: '',
          image_location: '',
          format: '',
          architecture: '',
          minimum_disk: '',
          minimum_ram: '',
          copy_data: true,
          public: false,
          protected: false
        },
        edit_image_form: {
          name: '',
          description: '',
          kernel_id: '',
          ramdisk_id: '',
          architecture: '',
          format: '',
          minimum_disk: '',
          minimum_ram: '',
          public: false,
          protected: false

        },
        tableData: []

      }
    },

    created () {
      this.getData()
    },

    methods: {

      async getData () {
        this.axios.get('api/getNetworksList')
          .then(response => {
            this.content = response.data
            this.tableData = this.content
            console.log(this.content)
            console.log(typeof (this.content))
            if (this.content === 'not login in') {
              alert('请先登录！')
              this.$router.push('/Login')
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },

      /*映像操作函数*/
      //删除单个映像
      images_delete_one (id) {
        console.log(id)
        this.$confirm('此操作将删除该映像, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.fullscreenLoading = true
          this.axios.get('api/images/delete_one?image_id=' + id)
            .then(response => {
              this.fullscreenLoading = false
              this.content = response.data
              if (this.content === 'not login in') {
                alert('请先登录！')
                this.$router.push('/Login')
              } else {
                if (this.content === 204) {
                  this.$message({
                    type: 'success',
                    message: '删除成功!'
                  })
                  window.location.reload()
                } else {
                  this.$message({
                    type: 'error',
                    message: '删除失败!' + ' 返回信息：' + this.content
                  })
                }

              }

            })
            .catch(function (error) {
              console.log(error)

            })

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })

      },
      handleClick () {
        alert('button click')
      },
      handleFile (response) {
        this.fileList.push(response.file)
      },

      handleExceed (files, fileList) {
        this.$message.warning(`最多上传 ${files.length} 个文件`)
      },
     /* toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },*/

    }

  }
</script>

<style scoped>
  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-input {
    display: block;

  }

  .el-select {
    display: block;
  }

  .el-dialog__body {
    text-align: left;

  }


</style>
